
function R(selector)
{      
 var h1 = "h1";
 var h2 = "h2";
 var h3 = "h3";
 var h4 = "h4";

   
  const self = {
    element: document.querySelector(selector),
    html: ()=> self.element,
    show:()=> document.write(selector),
    
    on: (event, callback) => {
      self.element.addEventListener(event, callback)
    },
    hide: ()=> {
      self.element.style.display = 'none'
    },
    attr: (name, value) => {
      if(value == null)
        return self.element.getAttribute(name)
      else
        self.element.setAttribute(name, value)
    }

  }

  

  return self
}

R("thyu ").show() 

