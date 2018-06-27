Bahmni.Clinical.Program.FormConditions.rules = {
    'DOT Option': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        if (patientProgramAttributes['DOT Option'] == 'Home-based DOT') {

            conditions.show.push('Name of Treatment Supporter');
            conditions.show.push('Tel No of Treatment Supporter');
            conditions.show.push('Physical Address of Treatment Supporter');
            conditions.show.push('Name of Community Support Organisation');
        } else if (patientProgramAttributes['DOT Option'] == 'Health Facility DOT') {
            conditions.hide.push('Name of Treatment Supporter');
            conditions.hide.push('Tel No of Treatment Supporter');
            conditions.hide.push('Physical Address of Treatment Supporter');
            conditions.hide.push('Name of Community Support Organisation');
        }
        return conditions;
    },
    'Transfer In': function (patientProgramAttributes, patient) {
        var conditions = {
            show: [],
            hide: []
        };


    if (typeof something === "undefined") {
    {
        if(patient.gender == 'M')
        {
         conditions.hide.push('Breast Feeding');  
         conditions.hide.push('Pregnant');  
        }else
        {
              conditions.show.push('Breast Feeding');
              conditions.show.push('Pregnant');
        }
       }
        if (patientProgramAttributes['Transfer In'] == 'WITH RECORDS' ||patientProgramAttributes['Transfer In'] == 'NO RECORDS AVAILABLE' || patientProgramAttributes['Transfer In'] == 'IN CARE' || patientProgramAttributes['Transfer In'] == 'ON ART' ) {
            conditions.show.push('WHO Stage');  
            conditions.show.push('Prior ARV Exposure');     
            conditions.show.push('Date Ready to Start ARV');    
            conditions.show.push('Date Start ARV');     
            conditions.show.push('CD4 Count');    
        } else  {
             conditions.hide.push('WHO Stage');
              conditions.hide.push('Prior ARV Exposure');
              conditions.hide.push('Date Ready to Start ARV'); 
              conditions.hide.push('Date Start ARV');  
              conditions.hide.push('CD4 Count');   
        }
        return conditions;
    }
};