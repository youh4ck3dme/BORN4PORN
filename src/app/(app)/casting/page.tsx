
import { CastingForm } from "./_components/casting-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CastingPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-wide-3">Become a Star</h1>
                <p className="text-muted-foreground mt-2 text-md sm:text-lg">
                    Ready for the spotlight? Apply to be a contestant on the next season of Eroticon.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl md:text-2xl tracking-wide-3">Casting Application</CardTitle>
                    <CardDescription>Fill out the form below. All information is confidential. You must be 18 or older to apply.</CardDescription>
                </CardHeader>
                <CardContent>
                    <CastingForm />
                </CardContent>
            </Card>
        </div>
    );
}
