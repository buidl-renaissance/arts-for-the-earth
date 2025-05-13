/*
/// Module: event
/// A contract for managing events where users can collect digital items
/// Events can be created by organizers and users can register to attend and collect items
*/

module event::event {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use sui::table::{Self, Table};
    use std::string::{Self, String};
    use sui::event as sui_event;
    use sui::clock::{Self, Clock};

    // Error codes
    const ENotAuthorized: u64 = 1;
    const EEventNotFound: u64 = 2;
    const EItemNotFound: u64 = 3;
    const EEventEnded: u64 = 4;
    const EAlreadyRegistered: u64 = 5;
    const EItemAlreadyCollected: u64 = 6;

    // Event object representing an event where items can be collected
    struct Event has key, store {
        id: UID,
        name: String,
        description: String,
        location: String,
        start_time: u64,
        end_time: u64,
        organizer: address,
        created_at: u64
    }

    // Collectible item that can be obtained at an event
    struct CollectibleItem has key, store {
        id: UID,
        event_id: address,
        name: String,
        description: String,
        creator: address,
        created_at: u64
    }

    // Registry to track events and collectible items
    struct Registry has key {
        id: UID,
        events: Table<address, Event>,
        admin: address
    }

    // Events
    struct EventCreated has copy, drop {
        event_id: address,
        name: String,
        organizer: address
    }

    struct ItemCollected has copy, drop {
        item_id: address,
        event_id: address,
        collector: address
    }
}
