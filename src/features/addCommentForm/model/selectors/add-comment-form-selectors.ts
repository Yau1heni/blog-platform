import { StateSchema } from 'app/providers/store-provider';

export const selectCommentFormText = (state: StateSchema) => state?.AddCommentForm?.text;
export const selectCommentFormError = (state: StateSchema) => state?.AddCommentForm?.text;
