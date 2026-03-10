import {
  artistesSorted,
  scenesName,
  artistesName,
  artisteID,
  sceneID,
  allartistebysceneId,
  allartistebysceneName,
  addArtiste,
  addScene,
  updateArtiste,
  updateScene,
} from "./backend.mjs";

/*
try {
    const records = await artistesSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/
/  
try {
    const records = await scenesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}


/
try {
    const records = await artistesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/
try { 
    const records = await artisteID('l8psz2k3cw7usbi'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/*
try { 
    const records = await sceneID('unvzkfij08550oa'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/*
try {
    const records = await allartistebysceneId('unvzkfij08550oa');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/*
try {
    const records = await allartistebysceneName('Kiosque');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/*
try {
    const artisteData = {
        "nom": "Esther Abrami",
        "date_de_representation": "2026-06-21 20:00:00",
        "scene" : "7qmylhvwj3pfkra",
        "description" : "Française d'origine mais formée à la rigueur des grandes académies britanniques, Esther Abrami a conquis le cœur d'un public mondial grâce à sa virtuosité décomplexée sur les réseaux sociaux. Ses interprétations passionnées, mêlant grands classiques et musiques de films célèbres, alliées à une élégance naturelle et une présence scénique solaire, font d'elle l'une des ambassadrices les plus influentes de la nouvelle génération classique.",
}; 
    await addArtiste(artisteData);
} catch (e) {
    console.error(e);
}
/

/
try {
    const sceneData = {
        "nom": "Salle Garnier",
        "artistes": ["Esther Abrami", "vqegmy3y7m8iddt"],
        "description" : "Une salle intimiste parfaite pour les récitals et la musique de chambre.",
}; 
    await addScene(sceneData);
} catch (e) {
    console.error(e);
}

/*
try {
    const data = {
        "nom": "Thomas Adès",
        "date_de_representation": "2026-06-20 20:00:00",
        "scene" : "unvzkfij08550oa",
        "description" : "Considéré comme l'un des génies les plus complets de notre époque, le Britannique Thomas Adès repousse les limites de la structure musicale. Son œuvre, complexe, colorée et d'une inventivité sans fin, lui vaut une reconnaissance internationale sur les plus grandes scènes d'opéra.",
    };
    const record = await updateArtiste('iaul6hrntokp40f', data);
    console.log("Artiste mis à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*
try {
  const data = {
    nom: "Salon des Glaces",
    artistes: ["jlxq1cdlnhxke5s"],
    description:
      "Un lieu d'exception pour des concerts intimistes dans un cadre historique remarquable.",
  };
  const record = await updateScene("7l7elrxal8ciodo", data);
  console.log("Scène mise à jour avec succès");
  console.log(JSON.stringify(record, null, 2));
} catch (e) {
  console.error(e);
}
*/
