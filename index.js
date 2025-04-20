
import { useState } from 'react';
import Image from 'next/image';

const stories = [
  {
    name: "Than, migrantarbejder fra Myanmar",
    quote: "I came here for a better life – now I serve drunk tourists every night.",
    image: "/than.jpg",
    description: "Than er flygtet fra Myanmar og arbejder nu som bartender på Khaosan Road. Han fortæller om lange arbejdstider, få rettigheder og følelsen af at være både usynlig og uundværlig. Alligevel er han taknemmelig for sikkerheden og lønnen i Thailand sammenlignet med forholdene i Myanmar."
  },
  {
    name: "Lek, tatovør og lokal forretningsdrivende",
    quote: "I’ve been here since 2006. Khaosan is not what it used to be – but I stay.",
    image: "/lek.jpg",
    description: "Lek har ejet en tatovørshop på Khaosan siden 2006. Han fortæller om gadens udvikling, fra backpacker-niche til kommerciel turistmaskine. For ham handler det om at tilpasse sig, men også bevare sin egen identitet."
  },
  {
    name: "Naomi, sexarbejder fra Vestafrika",
    quote: "I smile. I flirt. I survive.",
    image: "/naomi.jpg",
    description: "Naomi er sort kvinde og sexarbejder på Khaosan. Hun har valgt at arbejde her, fordi der er mange turister – og fordi hendes muligheder i Bangkok ellers er begrænsede. Hun fortæller om racisme, kontrol og den daglige performance, der er nødvendig for at tjene penge."
  }
];

export default function KhaosanStories() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Stemmer fra Khaosan Road</h1>
      <p className="mb-6 text-gray-700">Tre fortællinger fra virkeligheden bag turistfacaden. Hør og læs om dem, der arbejder og lever på Khaosan Road.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((s, i) => (
          <div
            key={i}
            onClick={() => setSelected(s)}
            className="cursor-pointer border p-4 rounded-xl shadow hover:bg-gray-50"
          >
            <Image src={s.image} alt={s.name} width={400} height={250} className="rounded-xl object-cover mb-3" />
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="italic text-sm text-gray-600">"{s.quote}"</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-8 border p-6 rounded-xl bg-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <Image src={selected.image} alt={selected.name} width={300} height={200} className="rounded-xl object-cover" />
            <div>
              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="mb-2 italic">"{selected.quote}"</p>
              <p className="text-gray-700">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
