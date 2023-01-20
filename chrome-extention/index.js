let storedUrls = []
const urlInput = document.getElementById("url-input")
const urlInputBtn = document.getElementById("url-input-btn")
const urlList = document.getElementById("url-list")
const clearUrlsBtn = document.getElementById("clear-urls-btn")
const urlsFromStorage = JSON.parse( localStorage.getItem("storedUrls") )
const currentTabBtn = document.getElementById("current-tab-btn")

if (urlsFromStorage) {
    storedUrls = urlsFromStorage
    render(storedUrls)
}

currentTabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        storedUrls.push(tabs[0].url)
        localStorage.setItem("storedUrls", JSON.stringify(storedUrls) )
        render(storedUrls)
    })
})

function render(urls) {
    let listItems = ""
    for (let i = 0; i < urls.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${urls[i]}'>
                    ${urls[i]}
                </a>
            </li>
        `
    }
    urlList.innerHTML = listItems
}

clearUrlsBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    storedUrls = []
    render(storedUrls)
})

urlInputBtn.addEventListener("click", function() {
    storedUrls.push(urlInput.value)
    urlInput.value = ""
    localStorage.setItem("storedUrls", JSON.stringify(storedUrls) )
    render(storedUrls)
})