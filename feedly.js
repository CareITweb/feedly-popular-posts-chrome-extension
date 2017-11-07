(function() {
  let minVoteThreshold = 99;
  let entryListEl = document.querySelectorAll('.entry');

  for(let i=0; i< entryListEl.length; i++) {
      let engamementTagElement = entryListEl[i].querySelector('.engagement');
      let upVoteCount = engamementTagElement &&  engamementTagElement.innerText;
      upVoteCount = parseInt(upVoteCount,10);
      if(!isNaN(upVoteCount) && upVoteCount <= minVoteThreshold){
          entryListEl[i].style.display = 'none';
      }
  }
})();