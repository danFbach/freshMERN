// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAuthForm() {
  return {
    type: TOGGLE_AUTH_FORM,
  };
}
