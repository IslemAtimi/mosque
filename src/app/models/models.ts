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
    niveauEtude: string;
    niveauEtudeAr: string;
  }

  export interface NiveauEtudeDto{
    id:number
    label:string
    labelAr:string
    order:number
  }
  export interface CreateNiveauEtudeDto{
    label:string
    labelAr:string
    order:number
  }

  export interface InscriptionDto {
    nom: string;
    prenom: string;
    nomAr: string;
    prenomAr: string;
    dateNaissance: Date; 
    lieuNaissance: string;
    dateInscription: Date; 
    photoUrl: string;
    sexe: SexeEnum; 
    nomPere: string;
    prenomPere: string;
    nomArPere: string;
    prenomArPere: string;
    adresse: string;
    pereDecede: boolean;
    relationWithLEtudiant: string;
    telephone: string;
    commentaire: string;
    lastMosquee: string;
    quran: string;
    nomEnseignent: string;
    groupeSanguin: string;
    aDesAllergies: boolean;
    detailsAllergies: string;
    aMaladiesChroniques: boolean;
    detailsMaladiesChroniques: string;
    aSubiOperation: boolean;
    detailsOperations: string;
    codePin: string;
    niveauEtude:number
    remarques: string;
  }


  export interface EncouragementCardDto {
    id: number;
    dateAdded: string;
    reason?: string;
    isConsumed: boolean;
    dateConsumed?: string;
  }
  