import { generate, clear } from "./generator.js";

$(document).ready(function () {
  const formType = $('#formType').val();
  const borders = $('#borders').is(':checked');
  const minWidth = $('#minWidth').val();
  const minHeight = $('#minHeight').val();
  const maxWidth = $('#maxWidth').val();
  const maxHeight = $('#maxHeight').val();
  const colorsIn = $('#colors').val();

  var colors = undefined;
  if (colorsIn != '') colors = colorsIn.split(',');

  generate('canvasOutput', {
    iterations: 500,
    height: 800,
    width: 800,
    forms: [
      {
        type: formType,
        borders: borders,
        minHeight: minHeight,
        minWidth: minWidth,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        colors: colors
      }
    ]
  });
});

$('#start').on('click', function () {
  const formType = $('#formType').val();
  const borders = $('#borders').is(':checked');
  const iterations = $('#iterations').val();
  const minWidth = $('#minWidth').val();
  const minHeight = $('#minHeight').val();
  const maxWidth = $('#maxWidth').val();
  const maxHeight = $('#maxHeight').val();
  const colorsIn = $('#colors').val();

  var colors = undefined;
  if (colorsIn != '') colors = colorsIn.split(',');

  generate('canvasOutput', {
    iterations: iterations,
    height: 800,
    width: 800,
    forms: [
      {
        type: formType,
        borders: borders,
        minHeight: minHeight,
        minWidth: minWidth,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        colors: colors
      }
    ]
  });
});

$('#clear').on('click', function () {
  clear('canvasOutput');
});