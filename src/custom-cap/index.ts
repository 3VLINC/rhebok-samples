import { Cap } from 'rhebok';

export class MyCustomCap extends Cap {

    public async check(context?: any) {

        if (context.isEmergency === true || context.color === 'green') { return true; }

        return false;

    }

}