# University Room - Inspiration Reference

Photos de chambre universitaire pour creer un environnement plus realiste dans le jeu.

---

## Photo 1 - Literie / Decoration murale
- **Housse de couette Liverpool FC** (rouge avec logo et ecusson)
- Lit simple typique de residence universitaire
- Mur blanc / sobre derriere

**Elements pour le jeu :** Lit avec couette decoree (poster d'equipe de foot), couleurs rouge/blanc

## Photo 2 - Poster mural
- **Poster "Wanted" One Piece - Shanks le Roux** (Akagami no Shanks)
- Affiche style parchemin / avis de recherche
- Prime : 4,048,900,000 berries
- Accroche au mur

**Elements pour le jeu :** Poster manga/anime accroche au mur, style wanted poster

## Photo 3 - Bureau / Etagere
- **Echiquier** avec pieces disposees sur le bureau
- **Figurines Pokemon/anime** (plusieurs personnages)
- **Creeper Minecraft** (figurine verte)
- **Ballon de football** pose a cote
- **Mug/tasse** sur le bureau
- Bureau en bois avec etagere

**Elements pour le jeu :** Bureau encombre avec echiquier, figurines geek, ballon de foot, mug

## Photo 4 - Peluches / Collection
- **Gengar** (peluche Pokemon violette)
- **Steve Minecraft** (peluche)
- **Peluche chat/vache** (noire et blanche)
- Disposees sur un meuble/etagere

**Elements pour le jeu :** Etagere avec peluches (Pokemon, Minecraft, animaux)

## Photo 5 - Collection Funko Pop
- **Wile E. Coyote as Cyborg** (#866, Looney Tunes x DC, Special Edition)
- **Marvin the Martian** (#1085, Space Jam A New Legacy)
- **Kakashi Raikiri** (#1103, Naruto Shippuden, Glow in the Dark, Special Edition)
- **The Child / Baby Yoda** (Star Wars / The Mandalorian)
- Boites Funko Pop exposees sur etagere

**Elements pour le jeu :** Etagere avec boites Funko Pop alignees (anime, DC, Star Wars)

## Photo 6 - Setup Gaming / Bureau
- **Ecran moniteur** avec code affiche (programmation)
- **Bandeau LED RGB rouge** le long du mur
- **Clavier Razer** avec retro-eclairage violet/RGB
- **Tapis de souris gaming** large
- **Manette Xbox/PS** sur le bureau
- **Console PS5** posee a cote
- **Figurines** sur l'etagere du bureau
- **Telephone rouge** pose sur le bureau
- **Globe / montgolfiere decorative** en haut de l'etagere

**Elements pour le jeu :** Setup gaming complet - ecran, clavier RGB, manette, PS5, LED rouges au mur

## Photo 7 - Vue d'ensemble de la chambre
- **Chambre mansardee** avec plafond en pente et velux
- **Art mural "GAMER"** avec icones (manette, eclairs, etoiles)
- **Banniere Liverpool FC** ("Jurgen's Reds")
- **Coussin "Thank You Boss"** Jurgen Klopp sur le lit
- **Housse de couette Liverpool FC** (rouge)
- **Meuble blanc** avec echiquier, figurines, peluches dessus
- **Tapis bleu** au sol
- **Funko Pops** sur l'etagere murale
- Vue d'ensemble : lit a droite, meuble/etagere au centre

**Elements pour le jeu :** Layout complet - chambre sous les toits, mur "GAMER", banniere foot, velux, tapis bleu

## Photo 8 - Resident de la chambre (portrait)
- Personne debout devant porte blanche
- **Sweat Ellesse** (sportswear)
- **Bandeau LED rouge** sur le cadre de porte
- Porte blanche typique de residence

**Elements pour le jeu :** Personnage en sweat sportswear, LED rouges autour de la porte

## Photo 9 - Vue complete de la chambre (panoramique)
- **Sweat Carhartt** (streetwear)
- Vue panoramique montrant tout l'agencement :
  - **Gauche :** setup gaming (ecran, clavier RGB, PS5)
  - **Centre mur :** art "GAMER", poster Wanted One Piece, banniere Liverpool
  - **Droite :** lit avec couette Liverpool FC
  - **Premier plan :** table avec echiquier et figurines
- Ambiance eclairage LED violet/rouge

**Elements pour le jeu :** Vue d'ensemble complete pour le layout de la chambre, eclairage ambiance LED

---

## Resume des themes pour la chambre universitaire

### Decoration / Ambiance
- **Chambre mansardee** sous les toits avec velux (plafond en pente)
- **Murs blancs** avec decorations
- **Eclairage LED RGB** (rouge/violet) sur murs et porte
- **Tapis bleu** au sol
- **Art mural "GAMER"** avec icones gaming

### Sport
- **Liverpool FC** : housse de couette, banniere "Jurgen's Reds", coussin Klopp
- **Ballon de football**

### Manga / Anime
- **One Piece** : poster Wanted Shanks
- **Naruto** : Funko Pop Kakashi
- **Figurines anime** diverses

### Gaming
- **Setup PC** : ecran, clavier Razer RGB, tapis gaming
- **PS5** + manette
- **Minecraft** : figurine Creeper, peluche Steve
- **Pokemon** : peluche Gengar, figurines
- **Funko Pops** : collection variee (DC, Star Wars, anime)

### Collections / Loisirs
- **Echiquier** avec pieces
- **Peluches** (Pokemon, Minecraft, animaux)
- **Funko Pops** en boite sur etagere
- **Globe decoratif** / montgolfiere

### Style vestimentaire
- **Streetwear** : Ellesse, Carhartt

### Layout de la chambre (pour le jeu)
```
+------------------------------------------+
|  velux/fenetre (plafond en pente)        |
|                                          |
|  [Setup Gaming]    [Mur decorations]     |
|  Ecran + clavier   GAMER art             |
|  PS5               Poster One Piece      |
|  LED rouges        Banniere Liverpool    |
|                                          |
|  [Table/meuble]              [Lit]       |
|  Echiquier                   Couette LFC |
|  Figurines                   Coussin     |
|  Peluches                                |
|  Funko Pops                              |
|                                          |
|  [Tapis bleu au sol]                     |
|                    [Porte + LED rouges]   |
+------------------------------------------+
```

## Instructions pour ajouter les photos

Redimensionner les photos a ~800x600px et les placer ici :
```
assets/inspiration/university-room/
  01-literie-liverpool.jpg
  02-poster-shanks.jpg
  03-bureau-figurines.jpg
  04-peluches.jpg
  05-funko-pops.jpg
  06-setup-gaming.jpg
  07-vue-ensemble.jpg
  08-portrait-resident.jpg
  09-vue-panoramique.jpg
```

Commande pour redimensionner (necessite ImageMagick) :
```bash
for img in *.jpg; do
  convert "$img" -resize 800x600\> -quality 75 "resized_$img"
done
```
