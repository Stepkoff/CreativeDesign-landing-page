const teamStoryButtons = document.querySelectorAll('.team__story-btn');
teamStoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('team__story-btn--change')
    btn.nextElementSibling.classList.toggle('team__story--change')
  })
})