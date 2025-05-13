/*
/// Module: venue
/// A contract for managing venues where events can be created, managed, and attended
*/

module venue::venue {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use sui::table::{Self, Table};
    use std::string::{Self, String};
    use sui::event;
    use sui::clock::{Self, Clock};

    // Error codes
    const ENotAuthorized: u64 = 1;
    const EVenueNotFound: u64 = 2;
    const EEventNotFound: u64 = 3;
    const EEventFull: u64 = 4;
    const EEventEnded: u64 = 5;
    const EAlreadyRegistered: u64 = 6;

    // Venue object representing a physical or virtual location
    struct Venue has key, store {
        id: UID,
        name: String,
        description: String,
        location: String,
        capacity: u64,
        owner: address,
        created_at: u64
    }

    // Event object representing an event at a venue
    struct Event has key, store {
        id: UID,
        venue_id: address,
        name: String,
        description: String,
        start_time: u64,
        end_time: u64,
        max_attendees: u64,
        current_attendees: u64,
        organizer: address,
        created_at: u64
    }

    // Registry to track venues and events
    struct Registry has key {
        id: UID,
        venues: Table<address, Venue>,
        events: Table<address, Event>,
        admin: address
    }

    // Events
    struct VenueCreated has copy, drop {
        venue_id: address,
        name: String,
        owner: address
    }

    struct EventCreated has copy, drop {
        event_id: address,
        venue_id: address,
        name: String,
        organizer: address
    }

    struct EventRegistration has copy, drop {
        event_id: address,
        attendee: address
    }
}
