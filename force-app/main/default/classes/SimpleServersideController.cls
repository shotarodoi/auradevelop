public with sharing class SimpleServersideController {
    @AuraEnabled
    public static String serverEcho() {
        return ('Hello from the server');
    }
}