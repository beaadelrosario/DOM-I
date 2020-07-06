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

const navLinks = document.querySelectorAll('a')
console.log(navLinks)

navLinks[0].textContent = 'Services'
navLinks[1].textContent = 'Product'
navLinks[2].textContent = 'Vision'
navLinks[3].textContent = 'Features'
navLinks[4].textContent = 'About'
navLinks[5].textContent = 'Contact'

// navLinks.style.color = 'green'

navLinks.forEach(function(item){
  item.style.color = 'green'
})

// navLinks.forEach(item => item.style.color = "green");

const ctaTextBlock = document.querySelector('.cta-text')
console.log(ctaTextBlock)


const mainTitle = document.querySelector('h1')
console.log(mainTitle)

mainTitle.textContent = 'DOM IS AWESOME'

mainTitle.style.fontSize = '60px'

const getStartedButton = document.querySelector('button')
console.log(getStartedButton)

getStartedButton.textContent = "Get Started"

const bannerImage = document.querySelector('#cta-img')
console.log(bannerImage)
bannerImage.src = 'img/header-img.png'
bannerImage.setAttribute = ('src','img/header-img.png')

const textContentTitle = document.querySelectorAll('h4')

console.log(textContentTitle)

textContentTitle[0].textContent = 'FEATURES'
textContentTitle[1].textContent = 'ABOUT'
textContentTitle[2].textContent = 'SERVICES'
textContentTitle[3].textContent = 'PRODUCT'
textContentTitle[4].textContent = 'VISION'

const textContentP = document.querySelectorAll('p')
console.log(textContentP)

textContentP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
textContentP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
textContentP[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
textContentP[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
textContentP[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImage = document.querySelector('#middle-img')
console.log(middleImage)

middleImage.src = 'img/mid-page-accent.jpg'
middleImage.setAttribute = ('src','img/mid-page-accent.jpg')

const contactSection = document.querySelector('.contact')
console.log(contactSection)

textContentTitle[5].textContent = 'CONTACT'

textContentP[5].textContent = '123 Way 456 Street Somewhere, USA'
textContentP[6].textContent ='1 (888) 888-8888'
textContentP[7].textContent ='sales@greatidea.io'
textContentP[8].textContent = 'Copyright Great Idea! 2018'