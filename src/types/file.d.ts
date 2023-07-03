declare interface UploadFile {
  formData: FormData;
  name?: string;
}

declare interface FileObj {
  id: string | number;
  path: string;
  name: string;
  originalName: string;
  url: string;
}
