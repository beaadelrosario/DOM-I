const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const newNavLink1 = document.createElement('a')
const nav = document.querySelector('nav')
newNavLink1.textContent = 'Blog'
newNavLink1.href = '#'
nav.appendChild(newNavLink1)

const newNavLink2 = document.createElement('a')
newNavLink2.textContent = 'Home'
newNavLink2.href = '#'
nav.prepend(newNavLink2)

const navLinks = document.querySelectorAll('a')
console.log(navLinks)

navLinks[0].textContent = siteContent.nav["nav-item-1"]
navLinks[1].textContent = siteContent.nav["nav-item-2"]
navLinks[2].textContent = siteContent.nav["nav-item-3"]
navLinks[3].textContent = siteContent.nav["nav-item-4"]
navLinks[4].textContent = siteContent.nav["nav-item-5"]
navLinks[5].textContent = siteContent.nav["nav-item-6"]

navLinks.forEach(function(item){
  item.style.color = 'green'
})

// navLinks.forEach(item => item.style.color = "green");

const ctaTextBlock = document.querySelector('.cta-text')
console.log(ctaTextBlock)


const mainTitle = document.querySelector('h1')
console.log(mainTitle)

mainTitle.textContent = siteContent.cta.h1

mainTitle.style.fontSize = '55px'

const getStartedButton = document.querySelector('button')
console.log(getStartedButton)

getStartedButton.textContent = siteContent.cta.button

const bannerImage = document.querySelector('#cta-img')
console.log(bannerImage)
bannerImage.src = siteContent.cta["img-src"]

const textContentTitle = document.querySelectorAll('h4')

console.log(textContentTitle)

textContentTitle[0].textContent = siteContent["main-content"]["features-h4"]
textContentTitle[1].textContent = siteContent["main-content"]["about-h4"]
textContentTitle[2].textContent = siteContent["main-content"]["services-h4"]
textContentTitle[3].textContent = siteContent["main-content"]["product-h4"]
textContentTitle[4].textContent = siteContent["main-content"]["vision-h4"]

const textContentP = document.querySelectorAll('p')
console.log(textContentP)

textContentP[0].textContent = siteContent["main-content"]["features-content"]
textContentP[1].textContent = siteContent["main-content"]["about-content"]
textContentP[2].textContent = siteContent["main-content"]["services-content"]
textContentP[3].textContent = siteContent["main-content"]["product-content"]
textContentP[4].textContent = siteContent["main-content"]["vision-content"]

const middleImage = document.querySelector('#middle-img')
console.log(middleImage)

middleImage.src = siteContent["main-content"]["middle-img-src"]

const contactSection = document.querySelector('.contact')
console.log(contactSection)

textContentTitle[5].textContent = siteContent.contact["contact-h4"]

textContentP[5].textContent = siteContent.contact.address
textContentP[6].textContent = siteContent.contact.phone
textContentP[7].textContent = siteContent.contact.email
textContentP[8].textContent = siteContent.footer.copyright

const mainContent = document.querySelector('.main-content')
mainContent.style.background = 'black'
mainContent.style.color = 'white'
mainContent.style.borderRadius = '10px'
mainContent.style.border = '2px solid black'