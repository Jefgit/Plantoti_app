import { ClimateType } from "../types";

const ClimateClassification: ClimateType[] = [
    {
        type: 1,
        description: "Two pronounced wet and dry seasons: Dry from November to April; wet during the rest of the year. This covers the western part of the islands of Luzon, Mindoro, Negros and Palawan.",
        locations: [
            "Ilocos Norte",
            "Ilocos Sur",
            "Mt.Province(Western part)",
            "Abra",
            "La Union",
            "Pangasinan",
            "Tarlac",
            "Nueva Ecija",
            "Zambales",
            "Pampanga",
            "Bulacan",
            "Bataan",
            "Manila",
            "Rizal",
            "Laguna",
            "Cavite",
            "Batangas",
            "Mindoro Occidental",
            "Antique",
            "Iloilo",
            "Negros Occidental(western, central and southern parts)"
        ]
    },
    {
        type: 2,
        description: "No dry season with very pronounced rainfall from November to January. The areas covered are Catanduanes, Sorsogon, the eastern part of Albay, the eastern and northern part of Camarines Norte and Camarines Sur, a great portion of the eastern part of Quezon, the eastern part of Leyte and a large portion of eastern Mindanao.",
        locations: [
            "Quezon(a great portion of eastern part)",
            "Camarines Norte(eastern and northern parts)",
            "Camarines Sur(eastern and northern parts)",
            "Albay(eastern part)",
            "Catanduanes",
            "Sorsogon",
            "Samar",
            "Leyte del Norte(eastern part)",
            "Leyte del Sur(eastern part)",
            "Surigao del Norte",
            "Surigao del Sur",
            "Agusan del Sur",
            "Davao(eastern part)"
        ]
    },
    {
        type: 3,
        description: "Season not very pronounced, relatively dry from November to April and wet during the rest of the year. Areas covered are the western part of Cagayan (Luzon), Isabela, Nueva Vizcaya, the eastern portion of the Mountain Province, southern Quezon, the Bondoc Peninsula. Masbate, Romblon, Northeast Panay, Eastern Negros, Central and Southern Cebu, part of Northern Mindanao and most of Eastern Palawan.",
        locations: [
            "Cagayan (western part)",
            "Isabela (western part)",
            "Mt. Province (eastern part)",
            "Nueva Vizcaya (western part)",
            "Quezon (small portions of southern part)",
            "Romblon",
            "Masbate",
            "Aklan",
            "Capiz",
            "Negros Occidental (northern part)",
            "Negros Oriental",
            "Cebu (central and southern parts)",
            "Bohol (northern parts)",
            "Palawan (eastern part)",
            "Misamis Oriental",
            "Bukidnon (northern part)",
            "Zamboanga del Norte, (southern part)",
        ]
    },
    {
        type: 4,
        description: "Rainfall more or less evenly distributed throughout the year. The area covered: are Batanes Province, Northeastern Luzon, Western  Camarines Norte and Camarines Sur, Albay, Eastern Mindoro, Marinduque, Western Leyte, Northern Negros and most of Central, Eastern and Southern Mindanao.",
        locations: [
            "Batanes",
            "Cagayan (eastern part)",
            "Isabela (eastern part)",
            "Nueva Vizcaya (eastern part)",
            "Quezon (northern part, a small portion  of eastern part, and southwestern part)",
            "Camarines Norte (southern & western parts)",
            "Camarines Sur (southern & western parts)",
            "Albay (western part)",
            "Marinduque",
            "Mindoro Oriental",
            "Leyte del Norte (western part)",
            "Leyte del Sur (western part)",
            "Cebu (northern part)",
            "Zamboanga del Norte, (northern part)",
            "Zamboanga del Sur (northern part)",
            "Misamis Occidental",
            "Bukidnon (southern part)",
            "Lanao del Norte",
            "Lanao del Sur",
            "Cotabato",
            "Davao (western part)",
            "Basilan",
            "Sulu"
        ]
    }
];

export default ClimateClassification;