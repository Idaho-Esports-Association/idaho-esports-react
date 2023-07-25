# Configuration

## To change the tab or window title

Go to [`public\index.html`](public\index.html) and to change the tab name

Change the text in the `<title>` element.

## The change the tab or window logo

Go to [`public\`](public\) and replace the favicon logo.

## To change title on the Navigation Bar

Go to [`src\components\Navbar.js`](src\components\Navbar.js) and change the text in the `<Navbar.Brand>` element.

## To change social links

Go to [`src\components\Socials.js`](src\components\Socials.js) and change the URLS and titles. You can comment out the options for future by using // at the beginning of the element. The logos are pulled from font awesome and assume a naming convention of fab fa-`title`, where title is the name of the social media company. You can manually change all to follow a different convention in [`src\components\SocialItem.js`](src\components\SocialItem.js)

