// https://www.omnicalculator.com/finance/loss-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lossratioRadio = document.getElementById('lossratioRadio');
const totalpremiumsearnedRadio = document.getElementById('totalpremiumsearnedRadio');
const insuranceclaimspaidRadio = document.getElementById('insuranceclaimspaidRadio');
const lossadjustmentexpenseRadio = document.getElementById('lossadjustmentexpenseRadio');

let lossratio;
let totalpremiumsearned = v1;
let insuranceclaimspaid = v2;
let lossadjustmentexpense = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

lossratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total premiums earned';
  variable2.textContent = 'Insurance claims paid';
  variable3.textContent = 'Loss adjustment expense';
  totalpremiumsearned = v1;
  insuranceclaimspaid = v2;
  lossadjustmentexpense = v3;
  result.textContent = '';
});

totalpremiumsearnedRadio.addEventListener('click', function() {
  variable1.textContent = 'Loss ratio';
  variable2.textContent = 'Insurance claims paid';
  variable3.textContent = 'Loss adjustment expense';
  lossratio = v1;
  insuranceclaimspaid = v2;
  lossadjustmentexpense = v3;
  result.textContent = '';
});

insuranceclaimspaidRadio.addEventListener('click', function() {
  variable1.textContent = 'Loss ratio';
  variable2.textContent = 'Total premiums earned';
  variable3.textContent = 'Loss adjustment expense';
  lossratio = v1;
  totalpremiumsearned = v2;
  lossadjustmentexpense = v3;
  result.textContent = '';
});

lossadjustmentexpenseRadio.addEventListener('click', function() {
  variable1.textContent = 'Loss ratio';
  variable2.textContent = 'Total premiums earned';
  variable3.textContent = 'Insurance claims paid';
  lossratio = v1;
  totalpremiumsearned = v2;
  insuranceclaimspaid = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lossratioRadio.checked)
    result.textContent = `Loss ratio = ${computelossratio().toFixed(2)}`;

  else if(totalpremiumsearnedRadio.checked)
    result.textContent = `Total premiums earned = ${computetotalpremiumsearned().toFixed(2)}`;

  else if(insuranceclaimspaidRadio.checked)
    result.textContent = `Insurance claims paid = ${computeinsuranceclaimspaid().toFixed(2)}`;

  else if(lossadjustmentexpenseRadio.checked)
    result.textContent = `Loss adjustment expense = ${computelossadjustmentexpense().toFixed(2)}`;
})

// calculation

// loss ratio = (insuranceclaimspaid + lossadjustmentexpense) / totalpremiumsearned

function computelossratio() {
  return ((Number(insuranceclaimspaid.value) + Number(lossadjustmentexpense.value)) / Number(totalpremiumsearned.value)) * 100;
}

function computetotalpremiumsearned() {
  return (Number(insuranceclaimspaid.value) + Number(lossadjustmentexpense.value)) / (Number(lossratio.value) / 100);
}

function computeinsuranceclaimspaid() {
  return ((Number(lossratio.value) / 100) * Number(totalpremiumsearned.value)) - Number(lossadjustmentexpense.value);
}

function computelossadjustmentexpense() {
  return ((Number(lossratio.value) / 100) * Number(totalpremiumsearned.value)) - Number(insuranceclaimspaid.value);
}