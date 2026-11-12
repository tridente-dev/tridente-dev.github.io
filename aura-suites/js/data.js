// js/data.js - Rooms database and details

export const roomsDatabase = {
    'classic-queen': {
        title: 'Classic Queen Room', maxGuests: 2, price: 140, maxStock: 12, available: 12,
        description: 'The Classic Queen Room is designed to offer an elegant and private retreat. Furnished with natural materials, light oak parquet and Carrara marble, it features a comfortable Queen Size bed with a high-density orthopedic mattress.',
        features: ['Max 2 Guests', '28 m²', 'Queen Size Bed', 'Marble Bathroom', 'Wi-Fi 1Gbps', 'Garden View', 'Smart A/C'],
        images: {
            hero:    'img/Classic-Queen-Room.jpg',
            interni: 'img/Jacuzzi-Panoramica.jpg',
            bagno:   'img/Aura-Suites-1.jpg'
        }
    },
    'superior-twin': {
        title: 'Superior Twin Room', maxGuests: 2, price: 170, maxStock: 8, available: 8,
        description: 'Bright and versatile, the Superior Twin Room offers a private balcony equipped with outdoor armchairs to relax in the open air. Configurable with two single beds or a double bed.',
        features: ['Max 2 Guests', '32 m²', 'Twin/Double Beds', 'Private Balcony', '55" Smart TV', 'Organic Amenity Kit'],
        images: {
            hero:    'img/Superior-Twin-Room.jpg',
            interni: 'img/argentato.jpg',
            bagno:   'img/vasca.jpg'
        }
    },
    'executive-sea': {
        title: 'Executive Sea View', maxGuests: 2, price: 210, maxStock: 5, available: 3,
        description: 'Located on the upper floors, this room boasts large soundproofed floor-to-ceiling windows with a panoramic sea view and an espresso coffee machine with artisanal pods.',
        features: ['Max 2 Guests', '38 m²', 'Frontal Sea View', 'Espresso Coffee Included', 'King Bed', 'Luxury Amenity Kit'],
        images: {
            hero:    'img/Aura-Suites-1.jpg',
            interni: 'img/Grand-Family-Residence.jpg',
            bagno:   'img/lampada.jpg'
        }
    },
    'deluxe-panorama': {
        title: 'Deluxe Panorama Suite', maxGuests: 2, price: 310, maxStock: 7, available: 4,
        description: 'An iconic suite featuring a freestanding bathtub placed near the large floor-to-ceiling sea-view windows. It offers a large private terrace furnished with sun loungers.',
        features: ['Max 2 Guests', '55 m²', 'Freestanding Bathtub', 'Panoramic Terrace', 'King Size Bed', 'Lounge Area'],
        images: {
            hero:    'img/Deluxe-Panorama-Suite.jpg',
            interni: 'img/Sauna-e-Bagno-Turco.jpg',
            bagno:   'img/cubo.jpg'
        }
    },
    'comfort-quad': {
        title: 'Comfort Quad Room', maxGuests: 4, price: 220, maxStock: 10, available: 10,
        description: 'Designed to accommodate up to 4 adult guests in total comfort, it features two distinct sleeping areas with a King Size bed and two single beds, and a master bathroom with double sink.',
        features: ['Max 4 Guests', '48 m²', '1 King + 2 Singles', 'Double TV', 'Spacious Bathroom', 'Minibar Included'],
        images: {
            hero:    'img/Comfort-Quad-Room.jpg',
            interni: 'img/bianco.jpg',
            bagno:   'img/salotto.jpg'
        }
    },
    'grand-residence': {
        title: 'Grand Family Residence', maxGuests: 4, price: 320, maxStock: 15, available: 15,
        description: 'A true luxury apartment consisting of two independent double bedrooms, two private bathrooms and a large central living room with a terrace overlooking the resort.',
        features: ['Max 4 Guests', '65 m²', '2 Bedrooms', '2 Private Bathrooms', 'Separate Living Room', 'Double Balcony'],
        images: {
            hero:    'img/Grand-Family-Residence.jpg',
            interni: 'img/albero.jpg',
            bagno:   'img/piante.jpg'
        }
    },
    'signature-terrace': {
        title: 'Signature Terrace Suite', maxGuests: 4, price: 450, maxStock: 6, available: 2,
        description: 'Panoramic penthouse for 4 guests with an impressive 360° terrace featuring a private heated Jacuzzi for exclusive use and dedicated butler service.',
        features: ['Max 4 Guests', '80 m²', 'Terrace Jacuzzi', 'Butler Service', '2 King Size Beds', '360° Panoramic View'],
        images: {
            hero:    'img/acquario.jpg',
            interni: 'img/Jacuzzi-Panoramica.jpg',
            bagno:   'img/Aura-Suites-3.jpg'
        }
    }
};

export const detailsDatabase = {
    'palestra': { title: 'Technogym Equipped Gym', text: '<b>Opening Hours:</b> 07:00 – 22:00 (every day).<br><br>Technogym cardio machines, dumbbells, kettlebells and a dedicated area for pilates and yoga.<br><br><b>All Inclusive:</b> Free.<br><b>Other packages:</b> €25 per day.' },
    'massaggi': { title: 'Massage Room & Holistic Treatments', text: '<b>Hours:</b> 09:00 – 20:00 (by reservation).<br><br>Swedish, holistic and decontracting massages and collagen facial treatments.<br><br><b>All Inclusive:</b> 1 massage/day of 50 min included.<br><b>Others:</b> €60 per session.' },
    'sauna': { title: 'Finnish Sauna & Turkish Bath', text: '<b>Hours:</b> 08:00 – 21:00.<br><br>Wellness journey in Nordic pine wood with aromatherapy and emotional showers.<br><br><b>All Inclusive:</b> Free.<br><b>Others:</b> €35 per 2-hour slot.' },
    'jacuzzi': { title: 'Heated Panoramic Jacuzzi', text: '<b>Hours:</b> 09:00 – 22:00.<br><br>Outdoor heated hydromassage pool at 37°C in the solarium with sunset view.<br><br><b>All Inclusive:</b> Free.<br><b>Others:</b> €30 per day.' },
    'buffet': { title: 'Buffet Gourmet "Aura" & 2 Snacks', text: '<b>HOURS:</b><br>• Breakfast: 07:30 – 10:30<br>• Lunch: 12:30 – 14:30<br>• Dinner: 19:30 – 21:30<br>• Morning snack: 11:00<br>• Afternoon snack: 17:00<br><br><b>DYNAMIC MENU:</b> changes at every meal.<br><br><b>Packages:</b> included in Half Board, Full Board and All Inclusive.' },
    'pizzeria': { title: 'Artisanal Pizzeria "L\'Aura"', text: '<b>HOURS:</b> dinner only, 19:30 – 23:00.<br><br><b>MENU:</b> Margherita DOP, Calabrian Diavola, Truffle & Porcini, Vegetarian.<br><br><b>Packages:</b> free only with All Inclusive. Others: €25 per guest.' },
    'carne': { title: 'Steakhouse "Prime Grill"', text: '<b>HOURS:</b> dinner only, 19:30 – 23:00.<br><br><b>MENU:</b> Black Angus Sliced Steak, Scottona Ribeye, Gourmet Burger.<br><br><b>Packages:</b> free only with All Inclusive. Others: €45 per person.' },
    'pesce': { title: 'Gourmet Fish Restaurant "Oceano"', text: '<b>HOURS:</b> dinner only, 19:30 – 23:00.<br><br><b>MENU:</b> Mixed Mediterranean Grill, Sea Bream Fillet in Crust, Fried Paranza.<br><br><b>PLEASE NOTE:</b> excluded from All Inclusive (€80 fixed per person).' },
    'bar-marea': { title: 'Marea Cocktail Lounge Bar', text: '<b>HOURS:</b> 10:00 – 01:00.<br><br><b>PRICE LIST:</b> Signature Cocktail Aura, Mojito, Aperol Spritz, white and red wines.<br><br><b>Packages:</b> free and unlimited with All Inclusive. Charged for others.' },
    'bar-tramonto': { title: 'Tramonto Sunset Pool Bar', text: '<b>HOURS:</b> 09:00 – 19:00.<br><br><b>PRICE LIST:</b> Smoothies, detox extracts, craft beers, granitas.<br><br><b>Packages:</b> free and unlimited with All Inclusive. Charged for others.' },
    'discoteca': { title: 'Aura Club & Nightlife', text: '<b>HOURS:</b> 23:00 – 04:00.<br><br>Resident and international guest DJ sets in a soundproofed room with a Bose Professional system.<br><br><b>ENTRY:</b> free for all resident guests.' },
    'sunset-cruise': { title: 'Sunset Cruise & Aperitif on Boat', text: '<b>HOURS:</b> 17:30 – 20:30 (3 hours).<br><br>Coastal navigation at sunset, aperitif and Champagne.<br><br><b>Price:</b> €350 total per boat (up to 6 people).' },
    'fullday-yacht': { title: 'Full-Day Private Yachting Tour', text: '<b>HOURS:</b> 10:00 – 17:00 (7 hours).<br><br>Tour among the coves, lunch on board and snorkeling equipment.<br><br><b>Price:</b> €750 total per boat (up to 8 people).' }
};