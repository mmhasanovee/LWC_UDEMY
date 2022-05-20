public with sharing class TestC {
    private static final Set<String> ACCOUNT = new Set<String>{'Name__c','Email__c','Test__c'};


    public TestC() {

    }
    
    public static void acInsert(){
        Account x = new Account();
        
        try{
        
        // if(Test.isRunningTest())
		// 	{
		// 		throw new AuraHandledException('');
		// 	}
            insert x;
        }
        catch(Exception e){
            System.debug(e);
        }
    }
}
