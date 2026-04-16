import debounce from 'lodash.debounce';

const refs = {
  form: document.querySelector('.feedback-form'),
};

class LocalStorageService {
  constructor({ key }) {
    this.key = key;
  }

  read() {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : null;
    } catch {
      console.error('LocalStorage parse error:', error);
      return null;
    }
  }

  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}

const feedbackStorage = new LocalStorageService({ key: 'feedback-form-state' });
const formData = feedbackStorage.read() ?? { email: '', message: '' };
const debouncedInputHandler = debounce(handleFeedbackFormInput, 300);

populateFormFields();

refs.form.addEventListener('input', debouncedInputHandler);
refs.form.addEventListener('submit', handleFeedbackFormSubmit);

function handleFeedbackFormInput(evt) {
  const { name, value } = evt.target;

  const updatedData = {
    ...formData,
    [name]: value,
  };

  feedbackStorage.save(updatedData);
  Object.assign(formData, updatedData);
}

function handleFeedbackFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;

  console.log('Submit:', formData);

  Object.keys(formData).forEach(key => (formData[key] = ''));
  feedbackStorage.remove();
  form.reset();
}

function populateFormFields() {
  // const { email, message } = refs.form.elements;

  // email.value = formData.email ?? '';
  // message.value = formData.message ?? '';

  Object.keys(formData).forEach(key => {
    if (refs.form.elements[key]) {
      refs.form.elements[key].value = formData[key];
    }
  });
}
