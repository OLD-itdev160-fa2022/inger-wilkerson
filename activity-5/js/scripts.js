/**
 * wrap everything in an IIFE 
 */
(function() {
    var data=[
        {
            name: 'Emmet',
            description: 'Emmet desc',
            author: 'John Doe',
            url: 'https://atom.io/packages/emmet',
            downloads: 20,
            stars: 3,
            price: 10,
            selector: 'p1'
        },
        {   
            name: 'Atom Beautify',
            description: 'atom beautify desc',
            author: 'John SMith',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 10,
            stars: 3,
            price: 10,
            selector: 'p2'
        }
    ];
    function package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        
        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    } 
   
    var getEl = function(id)   {
        return document.getElementById(id)
    }

     function writePackageInfo(package) {
        var selector = package.selector,
            nameEl = document.getElementById(selector + "-name"),
            descEl = getEl(selector + "-description"),
            authEl = getEl(selector + "-author"),
            downloadEl = getEl(selector + "-downloads"),
            starsEl = getEl(selector + "-stars");

            nameEl.textContent = package.name; 
            descEl.textContent = package.description; 
            authEl.textContent = package.author; 
            downloadEl.textContent = package.downloads;
            starsEl.textContent = package.stars;
          
    }

    function getTodaysDate() {
        var today = new Date();
        return today.toDateString();
    };
    
    var dateEl = document.getElementById('date');
    dateEl.textContent = "Date: " + getTodaysDate();

    console.log(getTodaysDate());
    console.log(new package(data[0]));
    console.log( );

    var emmet = new package(data[0]);
    writePackageInfo(emmet);

    var beautify = new package(data[1]);
    writePackageInfo(beautify);
}());