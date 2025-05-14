import client from './client';

export const storeEmail = async (email: string, formId: string) => {
  
    try {
      const result = await client('email_captures')
        .insert({
          email: email,
          form_id: formId
        })
        .onConflict(['email', 'form_id'])
        .merge({
          updated_at: client.fn.now()
        })
        .returning('id');
  
      return result;
    } catch (error) {
      console.error('Error storing email:', error);
      throw error;
    } 
  };