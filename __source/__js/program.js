import { $$ } from './_.js'

$$('.t2').forEach(table => {
    table.$$('input').forEach(e => {
        let label = e.parentElement;
        e.onchange = () => {
            if (e.checked) {
                table.$$('th, dl').forEach(e => { e.classList.add('d'); });
                label.parentElement.classList.remove('d');
                label.parentElement.parentElement.classList.add('highlight');
                label.nextElementSibling.classList.remove('d');
            } else {
                table.$$('tr').forEach(e => { e.classList.remove('highlight') });
                table.$$('th').forEach(e => { e.classList.remove('d'); });
                table.$$('dl').forEach(e => { e.classList.add('d') })
            }
        }
    })
})