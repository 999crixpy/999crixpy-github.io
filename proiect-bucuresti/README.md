# București Nocturn – Instrucțiuni Proiect

**Student:** Turnea Cristian  
**Facultate:** Facultatea de Marketing, ASE București  
**An:** II | **Grupă:** 1734 | **Seria:** C

---

## Structura proiectului

```
proiect-bucuresti/
│
├── index.html          ← pagina principală
├── css/
│   └── style.css       ← toate stilurile (mobile-first)
├── js/
│   └── script.js       ← interactivitate (nav, lightbox, stele)
├── images/
│   ├── palatul-parlamentului.jpg   ← înlocuiește cu fotografia ta!
│   ├── calea-victoriei.jpg         ← înlocuiește cu fotografia ta!
│   └── piata-unirii.jpg            ← înlocuiește cu fotografia ta!
└── README.md
```

---

## ⚠️ Pași obligatorii înainte de publicare

### 1. Adaugă propriile fotografii

Plasează **3 fotografii originale** în folderul `images/` cu **exact** aceste nume de fișier:

| Fișier | Subiect sugerat |
|---|---|
| `palatul-parlamentului.jpg` | Palatul Parlamentului noaptea |
| `calea-victoriei.jpg` | Calea Victoriei noaptea |
| `piata-unirii.jpg` | Piața Unirii noaptea |

> Formatul recomandat: **JPG**, rezoluție minimă **1200×900px**, optimizate pentru web (max. 400KB per imagine).

Dacă dorești să schimbi numele fișierelor, actualizează și atributul `src` din tag-urile `<img>` în `index.html`.

### 2. Verifică tehnicile de prelucrare

Asigură-te că descrierile tehnicilor din `index.html` corespund exact cu ce ai aplicat în Photoshop/Lightroom:

- **Imaginea 1** → Liquify (secțiunea `gallery__item` cu `data-index="1"`)
- **Imaginea 2** → Ajustări cromatice / Curves
- **Imaginea 3** → Double Exposure / Manipulare grafică

Modifică textele din `.gallery__tech-desc` după caz.

### 3. Publică online

Opțiuni recomandate (hosting gratuit):
- **Netlify** → drag & drop folderul pe netlify.com/drop
- **GitHub Pages** → repository public + Pages activat
- **000webhost / InfinityFree** → FTP upload

---

## Cerințe bifate ✅

- [x] **Mobile First** – CSS scris de la breakpoint mic spre mare
- [x] **Temă coerentă** – București nocturn, paletă dark gold
- [x] **3 imagini originale** cu tehnici de prelucrare specificate
- [x] **Tehnica menționată** sub fiecare imagine
- [x] **Secțiunea „Despre noi"** cu toate datele studentului
- [x] **Descrierea proiectului** inclusă în secțiunea Despre noi
- [x] HTML5 semantic, CSS3, JavaScript vanilla

---

## Cum arhivezi pentru online.ase.ro

1. Asigură-te că imaginile sunt în folder
2. Selectează **toate fișierele** din `proiect-bucuresti/`
3. Creează arhiva `proiect-mm-turnea-cristian.zip`
4. Încarcă pe [online.ase.ro](https://online.ase.ro)
