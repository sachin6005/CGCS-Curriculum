
function programs(heading,paragraph){
this.heading = heading
this.paragraph= paragraph
}
 var internet = new programs('Internet','The Internet is the biggest world-wide communication network of computers. The Internet has millions of smaller domestic, academic, business, and government networks, which together carry many different kinds of information. The short form of internet is the net. The World Wide Web is one of its biggest services.')

function item1(){
    var main = document.getElementById('content')
    var head = document.createElement('h2')
    var node = document.createTextNode(internet.heading)
    head.appendChild(node)
    main.appendChild(head)
    var para = document.createElement('p')
    var node = document.createTextNode(internet.paragraph)
    para.appendChild(node)
    main.appendChild(para)
}


var net = document.getElementById('item1')
net.addEventListener('click', item1, {once:true})

 var git = new programs('GITHUB','GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.')

function item2(){
    var main = document.getElementById('content')
    var head = document.createElement('h2')
    var node = document.createTextNode(git.heading)
    head.appendChild(node)
    main.appendChild(head)
    var para = document.createElement('p')
    var node = document.createTextNode(git.paragraph)
    para.appendChild(node)
    main.appendChild(para)
}
var github = document.getElementById('item2')
github.addEventListener('click', item2, {once:true})