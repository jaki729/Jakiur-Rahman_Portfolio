const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projects.forEach(card => {
      const tags = card.dataset.tags || '';
      card.classList.toggle('hidden', filter !== 'all' && !tags.split(' ').includes(filter));
    });
  });
});

// Static-only contact form: no server, database, API, or paid form provider.
// It opens the visitor's default mail client with a pre-filled email.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    if (data.get('website')) return;

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !message) {
      status.textContent = 'Please complete all fields.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:jakiurrahamn001@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email client…';
  });
}
