export interface EtudiantsDto
{
     id : string ;
     nom : string ;
     prenom : string ;
     nomAr : string ;
     prenomAr : string ;
     dateNaissance : Date
     lieuNaissance : string
     dateInscription : Date
     photoUrl : string
     sexe : SexeEnum,
     avatar: string,
     phoneNumbers :string[],
     emails : string[]
}
export interface Pagedresult<T>{
    items : T,
    totalCount:number
}
export enum SexeEnum{
    Homme =1,
    Femme= 2
}

export interface EtudiantDetailsDto {
    id: string;
    nom: string;
    prenom: string;
    nomAr: string;
    prenomAr: string;
    dateNaissance: Date; 
    lieuNaissance: string;
    dateInscription: Date; 
    photoUrl?: string | null;
    sexe: SexeEnum;
    prenomParent: string;
    prenomParentAr: string;
    adresse: string;
    telephone: string;
  }

  export interface NiveauEtudeDto{
    id:number
    label:string
    labelAr:string
    order:number
  }