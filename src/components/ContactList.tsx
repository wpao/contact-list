// src/components/ContactList.tsx
import { Card, CardContent } from "@/components/ui/card";

interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
}

const contacts: Contact[] = [
    { id: 1, name: "Dini Ukmi", phone: "+62 878-6395-8438", email: "andi@mail.com" },
    { id: 2, name: "Diana", phone: "+62 819-1809-3156", email: "budi@mail.com" },
    { id: 3, name: "Citra Dewi", phone: "+62 895-3349-13870", email: "citra@mail.com" },
    { id: 4, name: "Sadila", phone: "+62 898-0202-160", email: "sadila@mail.com" },
    { id: 5, name: "Prillllll", phone: "+62 821-4636-5099", email: "pril@mail.com" },
    { id: 6, name: "Elin", phone: "+62 853-3791-6572", email: "erline7@mail.com" },
    { id: 7, name: "Dian Lestari Ukmi Akhwat", phone: "+62 877-6532-6485", email: "lestari@mail.com" },
    { id: 8, name: "Jurianti", phone: "+62 852-3737-6854", email: "jurianti@mail.com" },
    { id: 9, name: "Iwik", phone: "+62 813-3763-5413", email: "iwik@mail.com" },
    { id: 10, name: "Ito", phone: "+62 853-3904-0083", email: "ito@mail.com" },
    { id: 11, name: "indriii", phone: "+62 853-3323-0367", email: "indriii@mail.com" },
    { id: 12, name: "vina", phone: "+62 819-5965-0524", email: "vina@mail.com" },
];

export default function ContactList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {contacts.map((contact) => (
                <Card key={contact.id} className="rounded-2xl shadow-md">
                    <CardContent className="p-4">
                        <h2 className="text-lg font-semibold">{contact.name}</h2>
                        <p className="text-sm text-gray-600">📞 {contact.phone}</p>
                        <p className="text-sm text-gray-600">✉️ {contact.email}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
