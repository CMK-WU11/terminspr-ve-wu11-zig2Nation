// dette er blevet genbrugt fra tidligere opgave fra repitaion fra uge 6
//det her gør så jeg kan sætte ting fra apiet rundt flere steder uden og skulle lave et helt fetch alle steder
export async function serverFetch(url: string) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Fejl ved hentning af data: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        throw new Error(`Fejl på serveren: ${error instanceof Error ? error.message : 'Ukendt fejl'}`);
    }
}
