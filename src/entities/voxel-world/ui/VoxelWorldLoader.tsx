import { VoxelWorldContainer } from './VoxelWorldContainer';
import { VoxelWorldSpinner } from './VoxelWorldSpinner';

export const VoxelWorldLoader = () => {
  return (
    <VoxelWorldContainer>
      <VoxelWorldSpinner />
    </VoxelWorldContainer>
  );
};
