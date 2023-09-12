import img1 from '../../Assets/Projects/Oh_my_food.png'
import img2 from '../../Assets/Projects/booki.com.jpeg'
import img3 from '../../Assets/Projects/kasa.png'
import logoKasa from '../../Assets/LOGO.png'
import logoBooki from '../../Assets/Booki.png'
import logoOhMyFood from '../../Assets/ohmyfood3.png'
import screenProjectBooki from '../Projects/bookiScreen.png'
import screenProjectKasa from '../Projects/kasaScreen.png'
import screenProjectFood from '../Projects/foodScreen.png'
import css from '../Skills/css.png'
import github from '../Skills/github.png'
import html from '../Skills/html.png'
import javaScript from '../Skills/javaScript.png'
import react from '../Skills/react.png'
import scss from '../Skills/scss.png'


const data = [
    {
        "id": 1,
        "title": "Projet Booki.com",
        "logo": logoBooki,
        "screenProject": screenProjectBooki,
        "titleTwo": "Le but de ce projet !",
        "href": "https://jujulien2.github.io/projet3-booki.com/",
        "image": img2,
        "description": "Un premier projet idéal pour faire ses premiers pas sur l'univers du codage, un apprentissage des deux langages indispensables au développement web, HTML et CSS.",
        "threeFacts": [
            "Découverte du codage avec de bonnes pratiques de HTML et CSS",
            "Création d'un site responsive pour de bons réflexes dès le départ",
            "Application d'un code lisible et simple pour commencer, tout en apprenant à maîtriser un thème cohérent en css"
        ],
        "skillsLogo": [
            html,
            css
        ]

    },
    {
        "id": 2,
        "title": "Projet Kasa",
        "titleTwo": "Le but de ce projet !",
        "logo": logoKasa,
        "screenProject": screenProjectKasa,
        "href": "https://jujulien2.github.io/Projet-8-Kasa/",
        "image": img3,
        "description": "Une refonte totale du site d'agence de location mobilière Kasa afin de passer à une verson plus optimisée avec React, NodeJs mais également l'optimisation du css grâce au SCSS. ",
        "threeFacts": [
            "Application de React pour un code organisé et plus avancé",
            "Utilisation de scss pour plus de possibilités et un code plus propre !",
            "Toujours une création responsive et des fonctionnalités intéressantes  comme le slider dynamique grâce à React !"
        ],
        "skillsLogo": [
            react,
            scss,
            javaScript
        ]
    },
    {
        "id": 3,
        "title": "Projet Oh My Food",
        "logo": logoOhMyFood,
        "screenProject": screenProjectFood,
        "titleTwo": "Le but de ce projet !",
        "href": "https://jujulien2.github.io/projet-4-oh-my-food.github.io/",
        "image": img1,
        "description": "Implémenter le front d'un site de restauration, spécifiquement demandé en 'mobile first', avec l'utilisation de nombreuses animations CSS !",
        "threeFacts": [
            "L'utilisation de GitHub qui sera le début de son utilisation au quotidien en codage",
            "Un projet qui repose sur l'exercice du css et de ses nombreuses possibilités !",
            "Les premiers pas sur l'importance du mobile first"

        ],
        "skillsLogo": [
            css,
            html,
            github
        ]
    }
];

export default data; 