$(document).ready(() => {
  console.log('hi jQuery')

  $('#update').click(e => {
    console.log('i clicked the button');

    let id = +$('img').attr('data-id')
    console.log(id, typeof id);
    let album = $('#album').val()
    let artist = $('#artist').val()

    $.ajax({
      method: 'PATCH',
      url: `/${id}`,
      dataType: 'json',
      data: {
        artist,
        album
      },
      success: data => {
        console.log();
      },
      fail: err => {
        console.log(err)
      }
    })
  })

  $('#delete').click(e => {
    console.log('i clicked the button');

    let id = +$('img').attr('data-id')
    console.log(id, typeof id);

    $.ajax({
      method: 'DELETE',
      url: `/${id}`,
      dataType: 'json',
      data: {
        id
      },
      success: data => {
        console.log('gone baby gone');
        location.reload()
      },
      fail: err => {
        console.log(err)
      }
    })
  })

})
