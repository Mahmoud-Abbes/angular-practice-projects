export interface SoftwareEngineer{
    id: number;
    name: string;
    techStack: string;
}

export type CreateEngineerDTO = Omit<SoftwareEngineer, 'id'>;