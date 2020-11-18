//Domain Components
import { ImportData } from '../../src/domain/ImportData';

describe('Import Data', () => {
    it('should return file is empty when files are empty', () => {
        //Given I have an import file component
        //When I import an empty file
        //Then I should get an error saying teh file is empty

        const importDataNotifications = new ImportData('').validate();

        expect(importDataNotifications.notification()).toBe('File is empty');
    });
});
