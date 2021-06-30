const searchInput = document.querySelector("#search-input")
searchInput.addEventListener("keydown", function(event)
{
    if(event.code ==="Enter")
    {
        search();
    }
});
function search(){
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q="+ input +"&sxsrf=ALeKk020dEf74LzpLgI0Q8424Zqu9uPn_w%3A1625060030528&source=hp&ei=vnLcYPSSHa7vz7sPsdiSoAI&iflsig=AINFCbYAAAAAYNyAzo2XP4uTHpBXiK7Zg2Dmi1hky0XY&oq="+ input +"&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgAEEMyBAgAEEMyBAgAEEMyBQgAELEDMgUILhCxAzICCC4yBQguELEDMgUIABCxAzICCAA6BwgjEOoCECc6CAguEMcBEK8BOggIABCxAxCDAToLCAAQsQMQgwEQiwM6CAguELEDEIsDOgcIABCxAxBDUPgSWK4fYIsiaAFwAHgAgAGnAYgB-wWSAQMwLjWYAQCgAQGqAQdnd3Mtd2l6sAEKuAEC&sclient=gws-wiz&ved=0ahUKEwj06euuvL_xAhWu93MBHTGsBCQQ4dUDCAc&uact=5"
}