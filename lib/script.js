const box_container = document.getElementById('box_container');
const radius1 = document.getElementById('radius_1');
const radius2 = document.getElementById('radius_2');
const radius3 = document.getElementById('radius_3');
const radius4 = document.getElementById('radius_4');

function updateBorderRadius() {
    const borderRadiusValue = `${radius1.value}% ${radius2.value}% ${radius3.value}% ${radius4.value}%`;
    box_container.style.borderRadius = borderRadiusValue;
}

radius1.addEventListener('input', updateBorderRadius);
radius2.addEventListener('input', updateBorderRadius);
radius3.addEventListener('input', updateBorderRadius);
radius4.addEventListener('input', updateBorderRadius);
box_container.addEventListener('click',()=>{
    const borderRadiusValue = window.getComputedStyle(box_container).borderRadius;
      
    // Cria um elemento temporário para copiar o valor
    const tempInput = document.createElement('input');
    tempInput.value = borderRadiusValue;
    document.body.appendChild(tempInput);
    
    // Seleciona o valor dentro do input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    // Copia o valor
    document.execCommand('copy');
    
    // Remove o input temporário
    document.body.removeChild(tempInput);
    
    // Avisa o usuário que o valor foi copiado
    alert('Border Radius copiado: ' + borderRadiusValue);
  
})