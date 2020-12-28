
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  var arrayOfLinks = [{"name" : "linkedin", "url" : "https://www.linkedin.com/in/pranshushrivastava/ "}, {"name" : "github", "url" : "https://github.com/psr007ps"}, {"name" : "leetcode", "url" : "https://leetcode.com/lestat25/"}];
  
  const lastPart = request.url.substr(request.url.lastIndexOf('/') + 1)
  //console.log(lastPart)

  if (lastPart === "links") {
    return new Response(JSON.stringify(arrayOfLinks), {
      headers: { 'Content-Type': 'json' },
    })
  }
  
  const init = {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  }
  const response = await fetch(url, init)
  const results = await gatherResponse(response)
  const page = new Response(results, init)
  //console.log("handler else started")
  
  const rewriter = new HTMLRewriter()
                  .on("div#links", new LinksTransformer(arrayOfLinks))
                  .on("div#profile", new ElementHandler())
                  .on("h1#name", new ElementHandler())
                  .on("img#avatar", new ElementHandler())
                  .on("title", new ElementHandler())
                  .on("body", new ElementHandler())
                  .on("div#social", new svgLinks())
  return rewriter.transform(page)
}

class svgLinks{
  element(element){
    element.removeAttribute("style")
    element.append("<a href=\"https://www.google.com/\">", { html: true })
            .append("<svg> <img height=\"32\" width=\"32\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/google.svg\" /> </svg></a>",  { html: true })
    element.append("<a href=\"https://www.cloudflare.com/\">", { html: true })
            .append("<svg> <img height=\"32\" width=\"32\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/cloudflare.svg\" /> </svg></a>",  { html: true })
    element.append("<a href=\"https://www.linkedin.com/in/pranshushrivastava/\">", { html: true })
            .append("<svg> <img height=\"32\" width=\"32\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg\" /> </svg></a>",  { html: true })
    element.append("<a href=\"https://github.com/psr007ps\">", { html: true })
            .append("<svg> <img height=\"32\" width=\"32\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg\" /> </svg></a>",  { html: true })      
    element.append("<a href=\"https://leetcode.com/lestat25/\">", { html: true })
            .append("<svg> <img height=\"32\" width=\"32\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/leetcode.svg\" /> </svg></a>",  { html: true }) 
          }
}

class ElementHandler{
  element(element){
    console.log(element.tagName)
    if (element.tagName === "div"){
      element.removeAttribute("style")
    }
    else if(element.tagName === "h1"){
      element.setInnerContent("pshri002@ucr.edu", {html: true})
    }
    else if(element.tagName === "img"){
      element.setAttribute("src", "https://www.w3schools.com/images/picture.jpg")
    }
    else if(element.tagName === "title"){
      element.setInnerContent("Pranshu Shrivastava", {html: true})
    }
    else if (element.tagName === "body"){
      element.setAttribute("class","bg-teal-800")
    }
    
  }
}

class LinksTransformer {
  constructor(links) {
    this.links = links
  }
  
  async element(element) {
    this.links.forEach(el => {
      element.append("<a href=\"" + el.url +"\">" + el.name + "</a>", { html: true })
    });
    
    //console.log("link section executed")
  }
}


const someHost = "https://static-links-page.signalnerve.workers.dev"
const url = someHost + "/static/html"

async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json())
  }
  else if (contentType.includes("application/text")) {
    return await response.text()
  }
  else if (contentType.includes("text/html")) {
    return await response.text()
  }
  else {
    return await response.text()
  }
}







