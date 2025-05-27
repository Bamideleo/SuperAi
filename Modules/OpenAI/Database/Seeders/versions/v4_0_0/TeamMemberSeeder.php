<?php

namespace Modules\OpenAI\Database\Seeders\versions\v4_0_0;

use Illuminate\Database\Seeder;

use App\Models\{
    Team,
    TeamMemberMeta
};

class TeamMemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $allTeams = Team::pluck('id');

        $categoriesAndFields = [
            'usage' => ['voice_clone_used'],
            'access' => ['voice_clone'],
        ];

        foreach ($allTeams as $teamId) {
            foreach ($categoriesAndFields as $category => $fields) {
                foreach ($fields as $field) {
                    $uniqueConstraints = [
                        'team_id' => $teamId,
                        'category' => $category,
                        'field' => $field,
                    ];

                    // Check if the record exists
                    $exists = TeamMemberMeta::where($uniqueConstraints)->exists();

                    if (!$exists) {
                        // Only insert if the record doesn't exist
                        $values = [
                            'value' => $category === 'access' ? 1 : 0,
                        ];
                        TeamMemberMeta::updateOrInsert($uniqueConstraints, $values);
                    }
                }
            }
        }

    }
}
