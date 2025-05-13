/*
/// Module: collectible
/// A contract for creating and managing digital collectibles with images, titles, and descriptions
*/

module collectible::collectible {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use sui::url::{Self, Url};
    use std::string::{Self, String};
    use sui::event;

    // Error codes
    const ENotAuthorized: u64 = 1;
    const ECollectibleNotFound: u64 = 2;

    // Collectible NFT representing a digital item
    public struct Collectible has key, store {
        id: UID,
        title: String,
        description: String,
        image_url: Url,
        creator: address,
        created_at: u64
    }

    // Registry to track all collectibles
    public struct Registry has key {
        id: UID,
        admin: address
    }

    // Events
    public struct CollectibleCreated has copy, drop {
        collectible_id: address,
        title: String,
        creator: address
    }

    public struct CollectibleTransferred has copy, drop {
        collectible_id: address,
        from: address,
        to: address
    }

    // === Functions ===

    // Initialize the registry
    fun init(ctx: &mut TxContext) {
        let registry = Registry {
            id: object::new(ctx),
            admin: tx_context::sender(ctx)
        };
        transfer::share_object(registry);
    }

    // Create a new collectible
    public fun mint(
        _registry: &Registry,
        title: String,
        description: String,
        image_url: String,
        collector: address,
        ctx: &mut TxContext
    ) {
        let collectible = Collectible {
            id: object::new(ctx),
            title,
            description,
            image_url: url::new_unsafe(string::to_ascii(image_url)),
            creator: tx_context::sender(ctx),
            created_at: tx_context::epoch(ctx)
        };

        // Emit event
        event::emit(CollectibleCreated {
            collectible_id: object::uid_to_address(&collectible.id),
            title: collectible.title,
            creator: collectible.creator
        });

        // Transfer to creator
        transfer::transfer(collectible, collector);
    }

    // Transfer a collectible to a new owner
    public fun transfer(
        collectible: Collectible,
        recipient: address,
        ctx: &TxContext
    ) {
        let sender = tx_context::sender(ctx);
        
        // Emit transfer event
        event::emit(CollectibleTransferred {
            collectible_id: object::uid_to_address(&collectible.id),
            from: sender,
            to: recipient
        });

        transfer::transfer(collectible, recipient);
    }

    // === Accessor functions ===
    
    public fun get_title(collectible: &Collectible): &String {
        &collectible.title
    }

    public fun get_description(collectible: &Collectible): &String {
        &collectible.description
    }

    public fun get_image_url(collectible: &Collectible): &Url {
        &collectible.image_url
    }

    public fun get_creator(collectible: &Collectible): address {
        collectible.creator
    }
}
