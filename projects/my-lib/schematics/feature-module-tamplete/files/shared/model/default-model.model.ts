export class DefaultModel {
  public id?: string;
  public active?: boolean;
  public createdDate?: string;
  public updatedDate?: string;
  public createdBy?: string;
  public updatedBy?: string;

  

  public toModel?(entity: any): DefaultModel {
    if (entity) {
      this.id = entity.id;
      this.active = entity.active;
      this.createdDate = entity.createdDate;
      this.updatedDate = entity.updatedDate;
      this.createdBy = entity.createdBy;
      this.updatedBy = entity.updatedBy;
 
    }

    return this;
  }
}
 