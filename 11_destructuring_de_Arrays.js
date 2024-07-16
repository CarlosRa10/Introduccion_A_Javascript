const tecnologia = ['HTML','JAVA','CSS','JAVASCRIPT','PYTHON']


const js = tecnologia[3]
console.log(js)

/*Para hacer el Destructuring con Arrays (entiendase arreglos o lista) 
es con [] y no son {} como en los objetos*/

const [html,java,css] = tecnologia

console.log(css)

const [, , , ,python] = tecnologia
console.log(python)