public with sharing class AccountController {
    public AccountController() {

    }
    
    @AuraEnabled
    public static List<Account> getAccounts(Integer numberOfAccounts) {
        return [Select Id, Name from Account WITH SECURITY_ENFORCED Limit : numberOfAccounts ];
    }
}
