$(document).ready(function ($) {
  var $pokemonForm = $('.new-pokemon')

$pokemonForm.on('submit', function (e) {
    e.preventDefault()
    // console.log($(this).serializeArray())
    var formdata = $(this).serializeArray()


    // console.log(data[0].name)

    var pokemon_name = $('#Name').val()
    var pokemon_type = $('#Type').val()
    var pokemon_power = $('#Power').val()
    var pokemon_trainerID = $('#TrainerID').val()

    console.log(pokemon_name)
    alert('ajax call now')
    $.ajax({
      type: 'POST',
      url: '/api/pokemons',
      data: formdata
    }).done(doSomething)
  })

  function doSomething (data) {
    alert('form submitted, new users created')
    alert(data)
    // $('#all-user-list').append('<li>' + data.name + data.email + data.password +'</li>')
  }
})
