# University Room - Inspiration Reference

Photos de chambre universitaire pour creer un environnement plus realiste dans le jeu.

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

---

## Resume des themes pour la chambre universitaire
- **Sport :** Liverpool FC (literie), ballon de foot
- **Manga/Anime :** One Piece (poster Shanks), figurines anime
- **Gaming :** Minecraft (Creeper, Steve), Pokemon (Gengar), figurines
- **Etudes/Loisirs :** Echiquier, bureau, mug
- **Ambiance :** Chambre d'etudiant typique, melange de passions, murs blancs, meubles simples

## Instructions pour ajouter les photos

Redimensionner les photos a ~800x600px et les placer ici :
```
assets/inspiration/university-room/
  01-literie-liverpool.jpg
  02-poster-shanks.jpg
  03-bureau-figurines.jpg
  04-peluches.jpg
```

Commande pour redimensionner (necessite ImageMagick) :
```bash
for img in *.jpg; do
  convert "$img" -resize 800x600\> -quality 75 "resized_$img"
done
```
