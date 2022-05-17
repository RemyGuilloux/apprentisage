function Dog(name, color, age)
{
    this.name = name;
    this.color = color;
    this.age = age ;
    this.aboie = function()
    {
        console.log("Wouaf " + this.name);
    } 
}

var petitCaniche = new Dog("choupette", "white", 4);

var grosPitBull = new Dog("Rex", "black", 2);
petitCaniche.aboie();