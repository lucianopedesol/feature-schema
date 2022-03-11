import { AppConfig } from './app.config';

export function initializer(appConfig: AppConfig): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await appConfig.load();
        resolve(true);
      } catch (error) {
        reject(error);
      }    
    });
  };
}
