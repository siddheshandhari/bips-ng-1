export interface Note {
  id: string;
  subject: string;
  body: string;
  company: {
    id: string;
    name: string;
  };
  create_author: {
    id: string;
    first_name: string;
    last_name: string;
  };
  update_author: {
    id: string;
    first_name: string;
    last_name: string;
  };
  category: string;
  context: number;
  create_at: {
    date: Date;
    timezone_type: number;
    timezone: string;
  };
}
