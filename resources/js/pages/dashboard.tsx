import PageBreadcrumb from '@/components/PageBreadCrumb';
import Card from '@/components/ui/Card';
import AppLayout from '@/layouts/AppLayout';

const Dashboard = () => {
    const title = 'Home';

    return (
        <AppLayout>
            <div>
                <PageBreadcrumb pageTitle={title} />
                <div className="space-y-6">
                    <Card title="Home" href="/" addButton>
                        Home :: Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Voluptatem tenetur molestias commodi,
                        dolores, repellendus est maxime laudantium recusandae
                        soluta blanditiis totam iste perferendis temporibus
                        consequuntur aspernatur tempora obcaecati facilis
                        quidem.
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;
